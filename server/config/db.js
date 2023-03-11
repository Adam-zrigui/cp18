import { connect, set } from "mongoose"

set("strictQuery", true);
const db = async () => {
    await connect(process.env.DATABASE_URL).then(() => console.log("db connection established")).catch((err) => console.error(err))
}
export default db