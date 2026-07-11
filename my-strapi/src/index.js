module.exports = {
  async bootstrap({ strapi }) {
    const products = [
      {
        title: "Complete React.js Course",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Learn React.js from zero to advanced. Build real-world applications using components, hooks, state management, and modern React practices.",
              },
            ],
          },
        ],
        price: 49.99,
        category: "Frontend",
        instantDelivery: true,
      },
      {
        title: "Next.js 16 Masterclass",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Master Next.js with App Router, Server Components, authentication, API routes, and modern deployment techniques.",
              },
            ],
          },
        ],
        price: 59.99,
        category: "Frontend",
        instantDelivery: true,
      },
      {
        title: "TypeScript Professional Course",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Learn TypeScript deeply and build scalable, maintainable applications with strong typing and modern development patterns.",
              },
            ],
          },
        ],
        price: 39.99,
        category: "Programming",
        instantDelivery: true,
      },
      {
        title: "Node.js Backend Development",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Build powerful backend applications with Node.js, Express, REST APIs, authentication, and database integration.",
              },
            ],
          },
        ],
        price: 54.99,
        category: "Backend",
        instantDelivery: true,
      },
      {
        title: "Full Stack E-commerce Project",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Create a complete e-commerce application using Next.js, Strapi, PostgreSQL, Clerk authentication, and payment integration.",
              },
            ],
          },
        ],
        price: 79.99,
        category: "Full Stack",
        instantDelivery: true,
      },
    ];

    for (const product of products) {
      const existingProduct = await strapi.entityService.findMany(
        "api::product.product",
        {
          filters: {
            title: product.title,
          },
        }
      );

      if (existingProduct.length === 0) {
        await strapi.entityService.create("api::product.product", {
          data: {
            ...product,
            publishedAt: new Date(),
          },
        });

        console.log(`Created: ${product.title}`);
      } else {
        console.log(`Already exists: ${product.title}`);
      }
    }
  },
};
