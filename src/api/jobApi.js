
import { client } from "../client";


export const getJobs = async () => {
    const jobs = await client.fetch(`*[_type=="job-post"]`);
    return jobs
}

export const createJob = async (data) => {
    const result = await client.create(data);
    return result;
}

export const updateJob = async (data) => {
    const result = await client.createOrReplace(data);
    return result;
}

export const deleteJob = async (id) => {
    const result = await client.delete(id);
    return result
}