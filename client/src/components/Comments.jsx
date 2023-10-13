import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.comentario_id} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg mb-4">
          <div>
            <img src={comment.USUARIOS.foto_ruta} alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <p className="text-white">{comment.contenido}</p>
            <p className="text-gray-400">{comment.USUARIOS.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
