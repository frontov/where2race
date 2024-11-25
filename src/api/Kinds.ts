import get from "./API";

function getKinds(params: any, setKinds: Function) {
    get('/kinds', params, setKinds);
}

export default getKinds;