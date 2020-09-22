const { Utils } = require("./utils");
const { Cache } = require("./cache");

class Endpoints {

    static FindLuggage = (req, res) => {

        // extract info from body
        const { body: { flightList } } = req;
        if (!flightList) {
            return res.status(500).json({
                success: false,
                error: "flightList missing from body of request"
            })
        }

        // check cache
        let cacheHit;
        try {
            cacheHit = Cache.Get(flightList)
        } catch (error) {
            return res.status(500).json({
                success: false,
                error
            })
        }
        if (cacheHit) {
            return res.status(200).json({
                success: true,
                cache: true,
                path: cacheHit
            });
        }

        // call util function to get path
        let path;
        try {
            path = Utils.FindLuggage(flightList)
        } catch (error) {
            return res.status(500).json({
                success: false,
                error
            })
        }

        // cache the flightList with response
        Cache.Set({ key: flightList, value: path });

        return res.status(200).json({
            success: true,
            cache: false,
            path
        })


    }
}

module.exports = {
    Endpoints
}