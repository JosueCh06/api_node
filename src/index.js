import app from "./app"

const main=()=>{
    try {
        app.listen(app.get("port"))
        console.log(`Server on port ${app.get("port")}`)
    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

main()