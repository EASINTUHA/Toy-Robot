const Gallery = () => {
    return (
      <>
        <div>
          <h2 className="text-5xl mt-5 mb-5 font-bold text-center">Gallery</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1507162728832-5b8fdb5f99fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRveSUyMHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Fiter Robo</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveSUyMHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Line Flowing</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1651801790874-981c62932c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHRveSUyMHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Monosret Robo</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1495055154266-57bbdeada43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHRveSUyMHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">AI Robo</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1613750651512-d65ce96dff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRveSUyMHJvYm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Flowing Robo</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          > 
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1634912314598-1d81dbfdcf86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHx0b3klMjByb2JvdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Car Toys</h2>
          </div>
        </div>
      </>
    );
};

export default Gallery;