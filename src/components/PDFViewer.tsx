import { Card } from '@/components/ui/card';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export const PDFViewer = ({ pdfUrl, title = 'Project Presentation' }: PDFViewerProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-heading font-bold mb-4">{title}</h2>
      <div className="w-full overflow-x-auto">
        <div className="min-w-full h-[600px] rounded-lg overflow-hidden border border-border">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4 text-center">
        Scroll horizontally or use the PDF controls to navigate
      </p>
    </Card>
  );
};
