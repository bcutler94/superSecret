class Cache {

    static Map = new Map ();

    static getKey = (key) => {
        try {
            return JSON.stringify(key);
        } catch (e) {
            throw new Error("Unable to serialize key for cache")
        }
    }

    static Set = ({ key, value }) => {
        const stringKey = Cache.getKey(key);
        Cache.Map.set(stringKey, value);
        Cache.Trim();
    }
    
    static Trim = () => {
        if (Cache.Map.size <= 100) return;

        const keys = Cache.Map.keys();
        let i = 0;
        while (Cache.Map.size > 100) {
            Cache.Map.delete(keys[i]);
            i++
        }
    }

    static Get = (key) => {
        const stringKey = Cache.getKey(key);
        return Cache.Map.get(stringKey);
    }

}

module.exports = {
    Cache
}