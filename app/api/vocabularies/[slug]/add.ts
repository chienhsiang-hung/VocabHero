import { sql } from "@vercel/postgres";

export async function add() {
    await sql`
    INSERT INTO vocabularies
    SELECT "userId", 'apple', 'http...', FALSE, 'meaning'
    FROM "Session"
    WHERE "sessionToken" = '3e37fee9-d2b4-47c1-9cf8-a729cb6ebbfb';
    `;

    console.log('ok');
};
export async function listALL() {
    const {rows} = await sql`
    SELECT * FROM vacabularies WHERE email=abcdefg2981@gmail.com;
    `
    console.log(rows);
}