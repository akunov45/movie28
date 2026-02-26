import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Space, Tag } from 'antd';
import {
  PlayCircleFilled,
  InfoCircleOutlined,
  StarFilled,
  ShareAltOutlined,
  PlusOutlined,
  PlaySquareOutlined
} from '@ant-design/icons';
import './watch-movie.css';
import { Bookmark } from 'lucide-react';

const { Title, Text } = Typography;

const WatchMovie = () => {
  // URL'ден фильмдин IDсин алуу (мисалы: /watch/baken-kydykeeva)
  const { id } = useParams();

  // Бул жерде адатта API'ден маалымат келет. Азырынча статикалык мисал:
  const movieData = {
    title: "БАКЕН КЫДЫКЕЕВА",
    subtitle: "Сыноо",
    season: "2-СЕЗОН",
    year: "2026",
    duration: "0ч 00м",
    age: "12+",
    rating: "7.3/26",
    genres: ["Драма", "Сериал", "Биография", "Тарыхый"],
    bgImage: "https://i.ytimg.com/vi/q-aaMZJePSw/maxresdefault.jpg" // Сүрөттүн дареги
  };

  return (
    <div className="watch-container" style={{ backgroundImage: `url(${movieData.bgImage})` }}>
      <div className="watch-overlay"></div>

      <div className="watch-content">
        {/* Жанрлар жана Мета маалымат */}
        <div className="meta-info">
          {movieData.genres.map(genre => <span key={genre}>{genre}</span>)}
          <div className="dot"></div>
          <span>{movieData.year}</span>
          <div className="dot"></div>
          <span>{movieData.duration}</span>
          <div className="dot"></div>
          <span>{movieData.age}</span>
          <div className="dot"></div>
          <Space size={4}>
            <StarFilled style={{ color: '#52c41a' }} />
            <Text style={{ color: '#52c41a' }}>{movieData.rating}</Text>
          </Space>
        </div>

        {/* Ижара Тэги */}
        <Tag color="blue" style={{ marginBottom: 20, borderRadius: 4 }}>
          Аренда эпизода
        </Tag>

        {/* Негизги Аталышы */}
        <div style={{ marginBottom: 30 }}>
          <Title level={1} style={{ color: 'white', margin: 0, fontSize: '48px', textTransform: 'uppercase' }}>
            {movieData.title}
          </Title>
          <Text style={{ color: '#fadb14', fontSize: '24px', fontWeight: 'bold' }}>
            {movieData.subtitle} — {movieData.season}
          </Text>
        </div>

        {/* Баскычтар (Action Buttons) */}
        <Space className="action-buttons" size="middle" wrap>
          <Button
            type="primary"
            size="large"
            icon={<PlayCircleFilled />}
            style={{ backgroundColor: '#c41d7f', borderColor: '#c41d7f' }}
          >
            Смотреть
          </Button>

          <Button ghost size="large" icon={<PlaySquareOutlined />} style={{ background: 'rgba(255,255,255,0.1)' }}>
            Трейлер
          </Button>

          <Button ghost size="large" style={{ background: 'rgba(255,255,255,0.1)' }}>
            Оценить
          </Button>

          <Button ghost size="large" icon={<ShareAltOutlined />} style={{ background: 'rgba(255,255,255,0.1)' }}>
            Поделиться
          </Button>

          <Button ghost size="large" icon={< Bookmark /> } style={{ background: 'rgba(255,255,255,0.1)' }} />
        </Space>
      </div>
    </div>
  );
};

export default WatchMovie;