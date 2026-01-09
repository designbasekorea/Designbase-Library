import { Image } from '@designbasekorea/ui';
import sample1 from '../image/sample-1.jpg';
import sample2 from '../image/sample-2.jpg';
import sample3 from '../image/sample-3.jpg';
import sample4 from '../image/sample-4.jpg';
import sample5 from '../image/sample-5.jpg';
import sample6 from '../image/sample-6.jpg';

export default function ImageExample() {
  // Vite에서 이미지를 import하면 URL 문자열이 반환됩니다
  const getImageUrl = (img: any): string => {
    if (typeof img === 'string') return img;
    if (img?.default) return img.default;
    return String(img);
  };

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Image
        </h2>
        <Image
          src={getImageUrl(sample1)}
          alt="예제 이미지"
          ratio="16:9"
          rounded
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          다양한 비율
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Image src={getImageUrl(sample2)} alt="1:1 비율" ratio="1:1" rounded />
          <Image src={getImageUrl(sample3)} alt="16:9 비율" ratio="16:9" rounded />
          <Image src={getImageUrl(sample4)} alt="4:3 비율" ratio="4:3" rounded />
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          다양한 이미지
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          <Image src={getImageUrl(sample1)} alt="이미지 1" ratio="1:1" rounded />
          <Image src={getImageUrl(sample2)} alt="이미지 2" ratio="1:1" rounded />
          <Image src={getImageUrl(sample3)} alt="이미지 3" ratio="1:1" rounded />
          <Image src={getImageUrl(sample4)} alt="이미지 4" ratio="1:1" rounded />
          <Image src={getImageUrl(sample5)} alt="이미지 5" ratio="1:1" rounded />
          <Image src={getImageUrl(sample6)} alt="이미지 6" ratio="1:1" rounded />
        </div>
      </section>
    </div>
  );
}

