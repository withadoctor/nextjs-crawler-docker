import Logo from '../components/logo';
import Card from '../components/card';
import './css/index.css'

const Index = ({ posts }) => (
    <div className="main__layout">
        <div className="logo__layout">
            <Logo></Logo>
        </div>
        <Card posts={posts}></Card>
    </div>
);

Index.getInitialProps = async () => {
    let posts = [
        {
            index: 'todayhumor_433895',
            content: '회사에서 옷 대충입는 사람 특',
            link: 'http://www.todayhumor.co.kr//board/view.php?table=bestofbest&no=433895&s_no=433895&page=1',
            view: 0,
            datetimenum: 1605029809165,
            datetimestr: '2020년 11월 11일 수요일 오전 2:36:49',
        }
    ];
    return {
        posts
    };
};

export default Index;
