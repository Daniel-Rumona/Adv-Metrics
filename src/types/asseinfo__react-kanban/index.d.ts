declare module '@asseinfo/react-kanban' {
    import { ReactNode } from 'react';

    type Card = {
      id: string | number;
      [key: string]: any;
    };

    type Column = {
      id: string | number;
      title: string;
      cards: Card[];
      [key: string]: any;
    };

    type Board = {
      columns: Column[];
      [key: string]: any;
    };

    export interface KanbanProps {
      board: Board;
      renderCard: (card: Card, column: Column) => ReactNode;
      renderColumnHeader: (column: Column) => ReactNode;
      onCardDragEnd?: (card: Card, sourceColumn: Column, targetColumn: Column) => void;
      onCardNew?: (column: Column) => void;
      [key: string]: any;
    }

    const Kanban: (props: KanbanProps) => JSX.Element;

    export default Kanban;
  }
