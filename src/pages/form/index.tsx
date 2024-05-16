const isProduction = window?.location?.href?.includes("blockchainforgood");
const redirect = "https://www.blockchainforgood.xyz" //isProduction ? "https://www.blockchainforgood.xyz" : "localhost:3000";
export const organizationalChannel = isProduction ? `https://www.moledao.io/#/form/project/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=${redirect}` : `http://localhost:3000/#/form/project/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=${redirect}`
export const personalChannel = isProduction ? `https://www.moledao.io/#/form/individual/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=${redirect}` : `http://localhost:3000/#/form/individual/create/230ac677-083f-4240-8f61-6a3e0d504ffd?redirect=${redirect}`

export const OrgForm = () => {
    return (
        <iframe src={organizationalChannel} style={{
            width: "100vw"
        }} />
    )
}

export const PersonForm = () => {
    return (
        <iframe src={personalChannel} style={{
            width: "100vw"
        }} />
    )
}