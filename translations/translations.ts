import fs from 'fs';
import path from 'path';

const translationsDir = path.join(process.cwd(), 'translations');

export default function getTranslations(locale: string) : any {
  const filepath = path.join(translationsDir, `${locale}.json`);
  const content = fs.readFileSync(filepath);
  return JSON.parse(content.toString());
}
