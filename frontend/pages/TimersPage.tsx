import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { DateTime, Duration } from 'luxon';

export function TimersPage() {
    const [ dates, setDates ] = useState([]);
    const [ now, setNow ] = useState(DateTime.now());

    useEffect(() => {
        fetch('/api/dates')
            .then(res => res.json())
            .then(res => {
                setDates(res);
            });

        setInterval(() => setNow(DateTime.now()), 1000);
    }, []);

    return <Flex w={'100%'} direction={'column'} align={'center'} mt={5} gap={5}>
        {dates.map((date, i) => <Timer key={i} now={now} date={date} />)}
    </Flex>
}

function Timer(props: React.PropsWithoutRef<any> & { now: DateTime, date: { name: string, start: string, end: string, color: string } }) {
    const start = DateTime.fromISO(props.date.start).toLocal();
    const end = DateTime.fromISO(props.date.end).toLocal();
    const now = props.now.toLocal();

    const total = Math.abs(start.diff(end).as('milliseconds'));
    const elapsed = Math.abs(now.diff(start).as('milliseconds'));
    const percentage = (elapsed / total) * 100;

    const state =
        now < start ? 'Upcoming' :
        now < end ? 'Active' : 'Ended';

    const remaining =
        now < start ? start.diff(now, [ 'years', 'months', 'days', 'hours', 'minutes', 'seconds' ])
                    : end.diff(now, [ 'years', 'months', 'days', 'hours', 'minutes', 'seconds' ]);

    return <Flex direction={'column'} w={'max-content'} align={'center'}>
        <Flex gap={2}>
            <Text color={props.date.color}
                  fontWeight={'bold'}
                  fontSize={'2xl'}>{props.date.name}</Text>
            <Text color={now < start ? 'yellow.500' : now < end ? 'green.500' : 'red.500'}
                  fontSize={'xl'}>[{state}]</Text>
        </Flex>
        <Text>{now < start ? 'Begins in' : now < end ? 'Ends in' : 'Ended'} {formatDuration(remaining)} {now > end ? 'ago' : ''}</Text>
        <Flex w={'50vw'} direction={'column'}>
            <Flex w={'100%'} justify={'space-between'}>
                <Text>{start.toFormat('yyyy/MM/dd HH:mm')}</Text>
                <Text>{end.toFormat('yyyy/MM/dd HH:mm')}</Text>
            </Flex>
            <Flex w={'100%'} h={'1.5em'} background={'gray.600'}>
                <Flex w={`${now < start ? 0 : percentage}%`} h={'100%'} background={'gray.400'}></Flex>
            </Flex>
        </Flex>
    </Flex>
}

function formatDuration(duration: Duration) {
    const parts = [];

    duration = duration.shiftTo('years', 'months', 'days', 'hours', 'minutes', 'seconds');
    if(duration.toMillis() < 0) duration = duration.negate();

    if (duration.years) parts.push(`${duration.years.toFixed(0)} year${duration.years > 1 ? 's' : ''}`);
    if (duration.months) parts.push(`${duration.months.toFixed(0)} month${duration.months > 1 ? 's' : ''}`);
    if (duration.days) parts.push(`${duration.days.toFixed(0)} day${duration.days > 1 ? 's' : ''}`);
    if (duration.hours) parts.push(`${duration.hours.toFixed(0)} hour${duration.hours > 1 ? 's' : ''}`);
    if (duration.minutes) parts.push(`${duration.minutes.toFixed(0)} minute${duration.minutes > 1 ? 's' : ''}`);
    if (duration.seconds) parts.push(`${duration.seconds.toFixed(0)} second${duration.seconds > 1 ? 's' : ''}`);

    return parts.join(', ');
}