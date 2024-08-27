import fs from 'fs';
import { join } from 'path';
import AdmZip from 'adm-zip';


export async function GET(req: Request) {
  const folderPath = join(process.cwd(), 'public', 'bga'); // 图片文件夹路径

    const zip = new AdmZip();
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      zip.addLocalFile(join(folderPath, file));
    });
    const zipData = zip.toBuffer();
  
  return new Response(zipData, {
    headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename=bga.zip',
      },
  });
}