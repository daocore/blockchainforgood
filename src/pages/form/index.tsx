import { Loading } from "../../components/Loading";

const isProduction = window?.location?.href?.includes("blockchainforgood.xyz");
const isBeta = window?.location?.href?.includes("blockchainforgood.verce");
const devUrl = isBeta ? "https://beta.moledao.io" : "http://localhost:3000";

const devId = "090ba7c2-bc0f-4476-b58e-fe834118dd89"; // beta
// const devId = "972ac263-0dd9-43cc-97d0-ea7fbe7477f5"; // localhost

export const organizationalChannel = isProduction ? `https://www.moledao.io/#/form/project/create/230ac677-083f-4240-8f61-6a3e0d504ffd` : `${devUrl}/#/form/project/create/${devId}`
export const personalChannel = isProduction ? `https://www.moledao.io/#/form/individual/create/230ac677-083f-4240-8f61-6a3e0d504ffd` : `${devUrl}/#/form/individual/create/${devId}`

export const OrgForm = () => {
    return (
        <>
            <Loading size={60} id={"organization"} />
            <iframe id={"organization"} src={organizationalChannel} style={{
                width: "100vw"
            }} />
        </>

    )
}

export const PersonForm = () => {
    return (
        <>
            <Loading size={60} id="person" />
            <iframe id={"person"} src={personalChannel} style={{
                width: "100vw"
            }} />
        </>
    )
}