import './description.css';

interface DescriptionItemProps {
  content: string;
}

const DescriptionItemComponent = ({ content }: DescriptionItemProps) => {
  return (
    <div className="description-item" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};

export default DescriptionItemComponent;
