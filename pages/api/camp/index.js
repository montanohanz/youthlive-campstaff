export default async function handler(req, res) {
    var data = await
    res.status(200);
    res.send(data);
}