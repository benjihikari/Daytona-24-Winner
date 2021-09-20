const DaytonaWinner2001 = (car) => {
    const WinnerCar = "Corvette";
    const Winner2001model = "Corvette C5-R";
    const Winner2001 = "Corvette C5";
    return new Promise((resolve, reject) => {
        if (car === WinnerCar || car === Winner2001model || car === Winner2001) {
            const winner = document.getElementById("winner");
            winner.innerText = `Espera un momento a que procesemos ese vehiculo...`
            setTimeout(() => {
                resolve(`El Corvette si gano en las 24h de Daytona en 2001`);
                const right = document.getElementById("outcome__yes");
                right.innerText = `El ${car} si pudo ganar en las 24h de Daytona del 2001`
            }, 3000);
        } else {
            const winner = document.getElementById("winner");
            winner.innerText = `Espera un momento a que procesemos ese vehiculo...`
            setTimeout(() => {
                reject(`El ${car} no gano en las 24h de Daytona en 2001, no en la compentencia general`)
                const not = document.getElementById("outcome__not");
                not.innerText = `El ${car} no gano en las 24h de Daytona de 2001.`
            }, 3000)
        };
    });
};
const Daytona24Winners = async (car) => {
    try {
        const whoCar = document.getElementById("carWinner");
        whoCar.innerText = `¿Que vehiculo quiere buscar?`;
        const Daytona = await DaytonaWinner2001(car);
        console.log(Daytona);
    } catch(error) {
        console.log(error);
        console.log(`Lo sentimos, el vehiculo introducido no gano en las 24h de Daytona o no participo en la misma.`)
    };
};

function DaytonaWinners() {
    const auto = document.getElementById("Input");
    const modeloAuto = auto.value;

    const d24Race = Daytona24Winners(modeloAuto);

    const Sucess = document.getElementById("sucess");
    setTimeout(() => {
        Sucess.innerText = `Datos procesados con exito!`;
    }, 3500)
}