const useFetch = async (ip, setResponse) => {

    try {
        const apiKey ='5011688ce57441b4a3388b15e6170717';

        let url = ip 
        ?
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`
        :
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

        const options = {
            method: 'GET',
        };

        const res = await fetch(url, options);

        if (!res.ok) {
            throw new Error(`Failed to fetch, with status: ${res.status}`)
        }

        const data = await res.json();

        const responseObj = {
            ip: data?.ip,
            location: data?.state_prov,
            city: data?.city,
            country_code: data?.country_code3,
            country_capital: data?.country_capital,
            country_name: data?.country_name,
            isp: data?.isp,
            zipcode: data?.zipcode,
            currency: data?.currency.name,
            calling_code: data?.calling_code,
            country_flag: data?.country_flag,
            latitude: data?.latitude,
            longitude: data?.longitude,
        };

        setResponse(responseObj);

    } catch (error) {
        console.log(error)
    }
};

export default useFetch;