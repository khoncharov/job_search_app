import './description.css';

interface DescriptionItemProps {
  content: string;
}

const DescriptionItemComponent = ({ content }: DescriptionItemProps) => {
  return (
    <li className="description-item" dangerouslySetInnerHTML={{ __html: content }}></li>
  );
};

export default DescriptionItemComponent;
