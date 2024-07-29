import React, { useEffect, useRef } from 'react';
import { Flex, Image as _Image } from '@chakra-ui/react';

enum DropType {
    Jokerge, Moonlight, Vint, Ip
}

let drops: { x: number, y: number, type: DropType }[] = [];
export function JokergePage() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let ip = '127.0.0.1';
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(res => ip = res.ip);

        const canvas = ref.current!;
        const ctx = canvas.getContext('2d')!;

        canvas.width  = window.innerWidth;
        canvas.height = canvas.parentElement!.clientHeight;

        const jokerge = new Image(80, 80);
        jokerge.src = 'https://cdn.lanny.dev/jokerge.webp';

        const sadkerge = new Image(80, 80);
        sadkerge.src = 'https://cdn.lanny.dev/sadkerge.webp';

        const jok = new Image(80, 80);
        jok.src = 'https://cdn.lanny.dev/jok.webp';

        const joekr = new Image(80, 80);
        joekr.src = 'https://cdn.lanny.dev/joekr.webp';

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'black'
        ctx.font = 'bold 64px sans-serif';
        ctx.lineWidth = 5;

        const DropTypeImage = {
            [DropType.Jokerge]: jokerge,
            [DropType.Moonlight]: sadkerge,
            [DropType.Vint]: joekr,
            [DropType.Ip]: null,
        };

        const DropTypeSpeed = {
            [DropType.Jokerge]: [ 0.8, 3.6 ],
            [DropType.Moonlight]: [ 0.8, 3.6 ],
            [DropType.Vint]: [ 3.2, 8.3 ],
            [DropType.Ip]: [ 0.4, 2.1 ]
        }

        const drawIp = (x: number, y: number) => {
            const w = ctx.measureText(ip).width;
            ctx.fillText(ip, x - w / 2, y);
            ctx.strokeText(ip, x - w / 2, y);
        };

        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i < drops.length; i++) {
                const drop = drops[i];
                if(drop.x < -jokerge.width || drop.y < -(canvas.height + jokerge.height)) {
                    delete drops[drops.indexOf(drop)];
                }
            }

            drops = drops.filter(x => x);

            for(let i = 0; i < drops.length; i++) {
                const drop = drops[i];
                const speed = DropTypeSpeed[drop.type];
                if(drop.type == DropType.Ip) drawIp(drop.x -= speed[0], drop.y += speed[1]);
                else ctx.drawImage(DropTypeImage[drop.type], drop.x -= speed[0], drop.y += speed[1]);
            }
        }, 1000 / 60);

        const distances = [ 160, 270, 320, 370 ];
        let prevX = -270;
        let count = 0;
        setInterval(() => {
            count++;
            prevX = prevX + distances[Math.floor(Math.random() * 4)];
            if(prevX > canvas.width + 270) prevX = -50;

            if(count % 10 == 0) {
                drops.push({ x: prevX, y: 0, type: DropType.Ip });
                return;
            }

            drops.push({ x: prevX, y: -80, type: getWeightedType() });
        }, 1000 / 10);

        function getWeightedType(): DropType {
            const weights = [
                { type: DropType.Vint, weight: 2 },
                { type: DropType.Ip, weight: 2 },
                { type: DropType.Moonlight, weight: 3 },
                { type: DropType.Jokerge, weight: 93 }
            ];

            const totalWeight = weights.reduce((sum, item) => sum + item.weight, 0);
            const random = Math.random() * totalWeight;

            let cumulativeWeight = 0;
            for (const { type, weight } of weights) {
                cumulativeWeight += weight;
                if (random < cumulativeWeight) {
                    return type;
                }
            }

            return DropType.Jokerge;
        }
    }, [ ref ]);

    return <>
        <_Image position={'absolute'} src={'https://cdn.lanny.dev/forest.png'} w={'100%'} h={'100%'} zIndex={-1} filter={'brightness(0.3)'}></_Image>
        <Flex w={'100%'} h={'100%'} overflow={'hidden'}>
            <audio loop={true} autoPlay={true} src={'https://cdn.lanny.dev/rain.mp3'}></audio>
            <canvas ref={ref} onClick={(event) => {
                const canvas = ref.current!;
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                for(let drop of drops) {
                    const area = { x: drop.x, y: drop.y, w: 80, h: 80 };
                    if (x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h) switch (drop.type) {
                        case DropType.Moonlight: {
                            window.location.replace('https://lanny.dev/kekw');
                            break;
                        }

                        case DropType.Vint: {
                            window.location.replace('https://vint-official.site/');
                            break;
                        }
                    }
                }
            }}>Canvas unsupported</canvas>
        </Flex>
    </>
}
