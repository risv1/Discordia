import { useParams } from "@remix-run/react"
import Dashboard from "~/components/channels/Dashboard"

const ChannelPage = () => {
    const { id } = useParams()

    return(
        <>
            <Dashboard>
                <h1 className="text-4xl">Channel: {id}</h1>
            </Dashboard>
        </>
    )
}

export default ChannelPage