import {get} from "./API";

export interface Kind {
    title: string;
    name: string;
}

async function getKinds(params: any):Promise<Kind[]> {
    let response = await get<Kind[]>('/kinds', params);
    return response.data;
}

export default getKinds;