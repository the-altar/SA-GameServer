import { Request, Response, NextFunction } from "express"
import { memberRank } from "../../engine/enums"
import { pool } from "../../db"

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.cookies.session) {
        req.res.locals.hasCookie = true
    } else {
        req.res.locals.guest = true
    }
    next()
}

export const userDataController = async function (req: Request, res: Response) {
    let user;
    if (req.res.locals.guest) {
        user = generateGuest()
    }
    return res.json(user)
}

export const userCharacters = async (req: Request, res: Response) => {
    const text = `select jsonb_build_object('id', entity.id) || entity.data || 
    jsonb_build_object('skills', jsonb_agg(skills.data)) as data 
    from entity join (select skill.id, skill.data || 
    jsonb_build_object('id', skill.id) || jsonb_build_object('effects', jsonb_agg( effect.data || 
    jsonb_build_object('id', effect.id))) as data, skill.entity_id from skill 
    join effect on effect.skill_id = skill.id group by skill.id 
    ) as skills on skills.entity_id = entity.id group by entity.id;`

    try {
        const r = await pool.query(text)
        return res.json(r.rows)

    } catch (err) {
        console.log(err)
        res.status(500)
        return res.send("Something went wrong...")
    }
}

const generateGuest = () => {
    return {
        username: `GUEST-${Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 2)}`,
        rank: memberRank[memberRank.Guest],
        avatar: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5),
        id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 9),
    }
}