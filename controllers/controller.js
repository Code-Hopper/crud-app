let getHome = (req, res) => {
    console.log("get home route")
    res.status(200).render("index")
}

let postHome = (req, res) => {
    console.log("post home route")
    let data = req.body
    res.status(202).redirect("/")
}

export { getHome, postHome }