import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return <div className="p">{t('ABOUT PAGE')}</div>;
};

export default AboutPage;
