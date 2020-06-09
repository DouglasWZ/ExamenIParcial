exports.home = (req,res, next) => { 
    res.render("crear_examen");
};

// Variables para realizar los calculos
exports.nuevoExamen = (req, res, next) => {
    const { prestamo } = req.body;
    const { años } = req.body;
    const { interes } = req.body;
    const { amortizacion } = req.body;
    const { cuota } = req.body;
    const { capital } = req.body;

    if(nullprestamo && nullaños && nullinteres){
        Console.log("Debe llenar todas las casilla");
    } else {
        res.send('Calculo realizado correctamente.');
    }
// Realizar los Calculos necesarios
    capital = cuota - interes;
    cuota = (capital * interes)/1-(1+0.06)^-4;
}

