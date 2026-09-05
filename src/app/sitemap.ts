import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ваш-домен.ru';

    return [
        // Главная
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Каталог
        {
            url: `${baseUrl}/catalog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Пример страницы продукта
        {
            url: `${baseUrl}/catalog/site-barbershop`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Пример страницы услуги
        {
            url: `${baseUrl}/services/ready-sites`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Пример страницы кейса
        {
            url: `${baseUrl}/portfolio/coffee-shop`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        // О студии
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Контакты
        {
            url: `${baseUrl}/contacts`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Юридические
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/offer`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}