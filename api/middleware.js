class MiddleWare {

    static TimeEndpoint = (req, res, next) => {
        console.time('Endpoint time');
        res.on("finish", () => {
            console.timeEnd('Endpoint time');
        });
        next()
    }
    
}

module.exports = {
    MiddleWare
}