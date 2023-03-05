import { classNames } from 'helpers/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                Enter
            </Button>
            <Modal isOpen={isOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt blanditiis aliquam,
                a molestiae quis architecto? Veritatis placeat
                explicabo eos maxime aliquam quos ipsum, quibusdam
                alias nulla facilis culpa ab accusamus!
            </Modal>
        </div>
    );
};
