import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '23134g',
            label: 'label',
            content: 'Content to show'
        },
        {
            id: '3590gh5',
            label: 'label 2',
            content: 'Content to show 2'
        },
        {
            id: '3590thj5',
            label: 'label 3',
            content: 'Content to show 3'
        }
    ];

    return(
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage;