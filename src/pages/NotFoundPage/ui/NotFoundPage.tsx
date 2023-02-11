import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';

import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation('notFoundPage');

    return <div className={classNames(cls.NotFoundPage, {}, [])}>{t('NOT FOUND PAGE')}</div>;
};

export default NotFoundPage;
