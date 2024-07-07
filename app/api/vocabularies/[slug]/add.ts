import { sql } from "@vercel/postgres";

export async function add() {
    await sql`
        INSERT INTO vocabularies (word, imgurl, meaning, audio, email)
        VALUES ('apple', 'https://...', '(n.)...', 'https://....', 'abcdefg2981@gmail.com');
    `;

    console.log('ok');
};
export async function listALL() {
    const {rows} = await sql`
        SELECT * FROM vocabularies WHERE email = 'abcdefg2981@gmail.com';
    `
    console.log(rows, typeof(rows), rows.length);
}