import axios from "axios";

class RequestApi {
    url = "https://api.thecatapi.com/v1/images/search?limit=10"
    proxyUrl = "https://cors-anywhere.herokuapp.com/"

    post = async () => {
        try {
            const result = await axios.post(this.proxyUrl + this.url, {
                headers: { "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f" }
            })
            console.log("api result" + result.data)
            return result
        } catch (error) {

        }
    }

} export default RequestApi