type Photo = {
  docId: string;
  caption: string;
  comments: string[];
  userId: string;
  username: string;
  userLikedPhoto: boolean;
  imageSrc: string;
  likes: string[];
  dateCreated: number;
};

export default Photo;
