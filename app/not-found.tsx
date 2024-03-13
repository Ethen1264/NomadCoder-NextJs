import { Metadata } from 'next';

export const metaData: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
