import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.comentario_id} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg mb-4">
          <div>
           
          </div>
          <div>
            <p className="text-white">{comment.contenido}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
