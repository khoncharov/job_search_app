import './description.css';

interface Prop {
  content: string;
}

export const DescriptionItemComponent = ({ content }: Prop) => {
  return (
    <div className="description-item" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};
