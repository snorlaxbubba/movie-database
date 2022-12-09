import TrendingCard from './TrendingCard';

function Trendings({ trendingData }) {
  return (
    <div>
      {trendingData.map(trending => <TrendingCard key={trending.id} trending={trending} />)}
    </div>
  )
}
export default Trendings