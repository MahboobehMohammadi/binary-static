import React from 'react';

class Pagination extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            current: 1
        };
    }

    handleChange = (newPage) => {
        if (newPage === this.state.current) return;

        const { pageSize } = this.props;

        this.setState({
            current: newPage
        });

        this.props.onChange(newPage, pageSize);
    }

    calcNumOfPages = () => {
        const { total, pageSize } = this.props;
        return Math.ceil(total / pageSize);
    }

    handleNext = () => {
        if (this.state.current < this.calcNumOfPages()) {
            this.handleChange(this.state.current + 1);
        }
    }

    handlePrev = () => {
        if (this.state.current > 1) {
            this.handleChange(this.state.current - 1);
        }
    }

    renderEllipsis = () => {
        return (
            <li className='pagination-item'>
                ...
            </li>
        );
    }

    renderItem = (pageNum) => {
        return (
            <li
                className={`pagination-item ${pageNum === this.state.current ? 'pagination-item-active' : ''}`}
                key={pageNum}
                onClick={() => {
                    this.handleChange(pageNum)
                }}
            >
                <a>{pageNum}</a>
            </li>
        );
    }

    renderItemRange = (first, last) => {
        const items = [];

        for (let pageNum = first; pageNum <= last; pageNum++) {
            items.push(this.renderItem(pageNum));
        }
        return items;
    }

    renderItems = () => {
        const numOfPages = this.calcNumOfPages();
        const { current } = this.state;

        if (numOfPages <= 9) {
            return this.renderItemRange(1, numOfPages);
        }
        else if (current <= 3) {
            return [
                ...this.renderItemRange(1, 5),
                this.renderEllipsis(),
                this.renderItem(numOfPages)
            ];
        }
        else if (current === 4) {
            return [
                ...this.renderItemRange(1, 6),
                this.renderEllipsis(),
                this.renderItem(numOfPages)
            ];
        }
        else if (current === numOfPages - 3) {
            return [
                this.renderItem(1),
                this.renderEllipsis(),
                ...this.renderItemRange(numOfPages - 5, numOfPages)
            ];
        }
        else if (numOfPages - current < 3) {
            return [
                this.renderItem(1),
                this.renderEllipsis(),
                ...this.renderItemRange(numOfPages - 4, numOfPages)
            ];
        }
        else {
            return [
                this.renderItem(1),
                this.renderEllipsis(),
                ...this.renderItemRange(current - 2, current + 2),
                this.renderEllipsis(),
                this.renderItem(numOfPages)
            ];
        }
    }

    render() {
        const { current } = this.state;
        return (
            <ul className='pagination'>
                <li
                    className={`pagination-prev ${current === 1 ? 'pagination-disabled' : ''}`}
                    onClick={this.handlePrev}
                >
                    <a>&lt;</a>
                </li>
                {this.renderItems()}
                <li
                    className={`pagination-next ${current === this.calcNumOfPages() ? 'pagination-disabled' : ''}`}
                    onClick={this.handleNext}
                >
                    <a>&gt;</a>
                </li>
            </ul>
        );
    }
}

Pagination.defaultProps = {
    total: 0,
    pageSize: 10,
    onChange: (page, pageSize) => {console.log(page, pageSize)}
};

export default Pagination;
