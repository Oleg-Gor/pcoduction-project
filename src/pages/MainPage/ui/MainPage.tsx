import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return <div className="p">{t('MAIN PAGE')}</div>;
};

export default MainPage;
