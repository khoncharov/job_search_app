import './description.css';

interface DescriptionItemProps {
  content: string;
}

const DescriptionItemComponent: React.FC<DescriptionItemProps> = ({ content }) => {
  return (
    <li className="description-item" dangerouslySetInnerHTML={{ __html: content }}></li>
  );
};

export default DescriptionItemComponent;
