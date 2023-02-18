import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme:Theme) => (story: ()=> Story) => (
    <div className={`app ${theme}`}>
        {story()}
    </div>
);
