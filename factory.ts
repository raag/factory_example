const PIANO = 1;
const VIOLIN = 2;

interface Instrument {
    tune(): void;
    play(): void;
}

class Piano {
    tune(): void {
        console.log('Afinando el piano');
    }

    play(): void {
        console.log('Tocándo el piano');
    }
}

class Violin {
    tune(): void {
        console.log('Afinando el violín');
    }

    play(): void {
        console.log('Tocándo el violín');
    }
}

class InstrumentFactory {
    static make(instrumentType: number): Instrument {
        switch (instrumentType) {
            case PIANO:
                return new Piano();
            case VIOLIN:
                return new Violin();
            default:
                throw 'Instrumento no válido';
        }
    }
}


class Main {
    playMusic(instrumentType: number): void {
        const instrument = InstrumentFactory.make(instrumentType);
        instrument.tune();
        instrument.play();
    }
}

new Main().playMusic(PIANO);
