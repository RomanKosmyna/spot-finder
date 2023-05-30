import { FileConstant } from '../constant';
import { HttpException, HttpStatus } from '@nestjs/common';

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const format = file.mimetype.split('/')[1];

  const randomName = Array(8)
    .fill(0)
    .map(() => Math.round(Math.random() * 10).toString())
    .join('');
  callback(null, `${name}${randomName}.${format}`);
};

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(FileConstant.file)) {
    return callback(
      new HttpException('Only image files are allowed', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};
