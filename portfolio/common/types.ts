export interface Project {
    id: number;
    heading: string;
    subheading?: string;
    year?: number;
    techUsed?: string[];
    body: string;
    link?: string;
}
