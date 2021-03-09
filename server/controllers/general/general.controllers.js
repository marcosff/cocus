const http = require("../../datasource/axios")

exports.start = (req, res) => {
    res.json({teste: true })
}

exports.findRepositoryByName = async (req, res) => {
    let temp = await http.get(`users/${req.params.name}/repos`);
    if (temp.status && temp.status === 404) {
        res.status(404).json({
            "status": 404,
            "message": temp.statusText
        })
        return false
    }

    temp = temp.filter(el => el.fork === false).map(el => {
        return {
            'name': el.name, 
            'ownername': el.owner.login,
            'branches': []
        }
    })
    for (const rep of temp) {
        let branch = await http.get(`repos/${req.params.name}/${rep.name}/branches`)
        rep.branches = branch.map(el => {
            return {
                'name': el.name,
                'sha': el.commit.sha
            }
        })
    }
    res.json(temp);
}