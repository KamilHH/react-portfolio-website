import './portfolioList.scss'

export const list = [
    {
        id: 'featured',
        title: 'Featured'
    },
    {
        id: 'web',
        title: 'Web App',
    },
    {
        id: 'mobile',
        title: 'Mobile App',
    },
    {
        id: 'design',
        title: 'Design',
    },
    {
        id: 'content',
        title: 'Content',
    },
];

const PortfolioList = ({id, title, active, setSelected}) => {

    return (
        <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=>setSelected(id)}>
            {title}
        </li>
    );
};

export default PortfolioList;